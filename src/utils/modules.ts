export type moduleIds = (
    "browse" |
    "request" |
    "login"
)

export type changeModuleFunction = (newModule: moduleIds) => void;
