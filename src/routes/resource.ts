import { Router } from 'express';

const router = Router();

/* resource 이름은 사용시 변경. */
router.get('/', (req, res, next) => {
	res.send('respond with a resource');
});

export default router;
