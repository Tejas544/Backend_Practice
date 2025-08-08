// const asyncHandler = () => async (req , res, next) => {
//     try {
        
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success : false,
//             message : error.message
//         })
//     }
// }

//This is try catch method we will use promises method

const asyncHandler = (requestHandler) => {
    return (req , res , next) => {
        Promise.resolve(
            requestHandler(req , res , next)
        )
        .catch(
            (err) => next(err)
        );
    }
}

export {asyncHandler};