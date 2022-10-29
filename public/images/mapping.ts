const getGenre = (filename: string) => {
    const result = filename.split('.')
    return result[0]
};

export default getGenre;
