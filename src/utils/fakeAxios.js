let id = 0;

const axios = {
    get(str){
        return new Promise((resolve, _) => {
            const fetchData = Array(50).fill({}).map((_, index) => ({
                id: id + index,
                name: `응애모빌${id + index}`
            }))
            id += 50;
            setTimeout(resolve(fetchData), 500)
        })
    }
}

export default axios