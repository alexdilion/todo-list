const EventManager = () => {
    let listeners = [];

    const addListener = (listener) => {
        listeners.push(listener);
    };

    const trigger = (params) => {
        listeners.forEach((listener) => listener(params));
    };

    const clearListeners = () => {
        listeners = [];
    };

    return {
        addListener,
        trigger,
        clearListeners,
    };
};

export default EventManager;
