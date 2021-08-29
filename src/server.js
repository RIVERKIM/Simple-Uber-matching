import sirv from 'sirv';
import cors from 'cors'
import express from 'express';
import compression from 'compression';
import { json } from 'body-parser';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

express() // You can also use Express
	.use(json())
	.use(cors())
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
			session: (req, res) => ({
				user: false,
				userData: false,
			})
		})
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
