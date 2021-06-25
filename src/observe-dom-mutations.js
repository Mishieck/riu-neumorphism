let MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

export const observeDOMMutations = (element, callback, options) => {
  if (MutationObserver) {
    const mutationObserver = new MutationObserver(callback);
    mutationObserver.observe(element, options);
    return mutationObserver;
  } else {
    console.error("MutationObserver is not supported!");
    return;
  }
};
