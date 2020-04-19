const apiCall = (link) => {
  fetch(link).then((res) => res.json());
};

export default apiCall;
