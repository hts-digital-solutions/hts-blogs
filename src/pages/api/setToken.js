import cookie from "cookie";

const setToken = async (req, res) => {
    const { token } = req.body;
    try {
        if (token) {
            res.setHeader("Set-Cookie", [
                cookie.serialize(
                    '__pid',
                    JSON.stringify({
                        token
                    }),
                    {
                        httpOnly: true,
                        secure: process.env.NODE_ENV !== "development",
                        maxAge: 60 * 60 * 24 * 30,
                        sameSite: "strict",
                        path: "/",
                    }
                ),
            ]);
        }
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ token }));
    } catch (error) {
        res.end(JSON.stringify(error));
    }
};

export default setToken;
