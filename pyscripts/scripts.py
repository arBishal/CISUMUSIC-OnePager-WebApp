from cProfile import label
from operator import length_hint
import sys
import subprocess

def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])

packages = ['tensorflow-macos', 'librosa']
import os
import numpy as np
import tensorflow as tf
from sklearn.preprocessing import StandardScaler
import librosa


audio_path = sys.argv[1]
data, sampling_rate = librosa.load(audio_path)

# length
length = librosa.get_duration(data)
# print(length)
features = [6649]

chroma = librosa.feature.chroma_stft(data, sr=sampling_rate)
features.append(chroma.mean())
features.append(chroma.var())

rms =  librosa.feature.rms(data)
features.append(rms.mean())
features.append(rms.var())

spectral_centroid =  librosa.feature.spectral_centroid(data, sr = sampling_rate)
features.append(spectral_centroid.mean())
features.append(spectral_centroid.var())

spectral_bandwidth = librosa.feature.spectral_bandwidth(data, sr = sampling_rate)
features.append(spectral_bandwidth.mean())
features.append(spectral_bandwidth.var())

spectral_rolloff = librosa.feature.spectral_rolloff(data, sr = sampling_rate)
features.append(spectral_rolloff.mean())
features.append(spectral_rolloff.var())

zero_crossing_rate =  librosa.feature.zero_crossing_rate(data)
features.append(zero_crossing_rate.mean())
features.append(zero_crossing_rate.var())

#harmony or harmonic?
harmonic = librosa.effects.harmonic(data)
features.append(harmonic.mean())
features.append(harmonic.var())

#perceptr
features = features + [1000, 1000, 1000]
#tempo

#mfcc how to access them?
for i in range(1,21):
    mfcc = librosa.feature.mfcc(data, sr = sampling_rate, n_mfcc = i)
    features.append(mfcc.mean())
    features.append(mfcc.var())

#label

# for i in range(58-7):
#     features.append(float(i))



features = np.array([features], dtype=float)
print(features)
print(features.shape)
features = StandardScaler().fit_transform(features)




# print(text.__version__)
# path = os.path.dirname(__file__)
# print(path)
model = tf.keras.models.load_model('/Users/magic-kiri/Desktop/Codes/CISUMUSIC/CISUMUSIC-OnePager-WebApp/pyscripts/genre_classification.h5')
# model = tf.keras.models.load_model(path+'/.model')
# model.summary()


classes = ['blues', 'classical', 'country', 'disco', 'hiphop', 'jazz', 'metal', 'pop', 'reggae', 'rock']

# print(classes)

def classify(model, input):
    output = model.predict(input)
    output = np.where(output > 0.5, 1, 0)

    return output

print(classify(model, features))