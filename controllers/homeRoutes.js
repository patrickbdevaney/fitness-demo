const router = require('express').Router();
const { Project, User, Workout } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
  
    const planData = await Project.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

  
    const plans = planData.map((plan) => plan.get({ plain: true }));

    
    res.render('homepage', { 
      plans, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/plans/:id', async (req, res) => {
  try {
    const planData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const plan = planData.get({ plain: true });

    res.render('workout', {
      ...plan,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/profile', withAuth, async (req, res) => {
  try {
  
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
      
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
  
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      
      include: [{ model: Workout }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {

  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
