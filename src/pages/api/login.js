import cookie from "cookie";

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (email && password) {
            const res = await fetch(process.env.BASE_URL + '');
            const data = await res.json()

            res.setHeader("Set-Cookie", [
                cookie.serialize(
                    '__pid',
                    JSON.stringify({
                        token: data?.token
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

            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ token: data?.token, user: data?.user }));
        } else {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ status: false, message: 'Email or password is wrong!' }));
        }

    } catch (error) {
        res.end(JSON.stringify(error));
    }
};

export default login;
