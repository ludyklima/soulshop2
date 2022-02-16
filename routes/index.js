//Esse index é para organizar todas as rotas desse arquivo SoulShop.

const { Router } = require("express");
const userRoutes = require("./userRoutes");
const router = Router();
const isLogged = require("../middlewares/is-logged");
const User = require("../models/User");

router.get("/", isLogged, async (req, res) => {
    const { user } = req.session;
    const data = await User.findById(user._id).lean();
    res.render("home", { user, data });
});
router.use(userRoutes);
router.use(( req, res, next) => {
    res.status(404).render("404");
})

module.exports = router;