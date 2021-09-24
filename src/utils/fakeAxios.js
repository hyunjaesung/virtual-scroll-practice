let id = 0;
const COUNT = 50;

const axios = {
  get(str) {
    return new Promise((resolve, _) => {
      const fetchData = Array(COUNT)
        .fill({})
        .map((_, index) => ({
          id: id + index,
          name: `응애모빌${id + index}`,
        }));
      id += COUNT;
      setTimeout(resolve(fetchData), 500);
    });
  },
};

export default axios;
