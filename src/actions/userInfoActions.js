export function fetching() {
    return {
        type: "FETCHING",
    };
}

export function fetchSuccess(data) {
    return {
        type: "FETCH_SUCCESS",
        data,
    };
}

export function fetchError(message) {
    return {
        type: "FETCH_ERROR",
        message,
    };
}