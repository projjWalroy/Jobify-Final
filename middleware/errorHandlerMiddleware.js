import { StatusCodes } from "http-status-codes";

//it invoked by routes when some error occurs
const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err);
    const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    const msg = err.message || "Something went wrong, try again later";

    res.status(statusCode).json({ msg });
};

export default errorHandlerMiddleware;
