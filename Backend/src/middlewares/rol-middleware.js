export function authorizeUser(roles){
  return function(req, res, next){
    if(!roles.includes(req.user.rol)){
      return res.status(403).json({ message: 'Unauthorized' });
    }
    next();
  }
}