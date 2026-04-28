const http = require('http');
const os = require('os')

const server = http.createServer((req, res)=>{
	const {method, url} = req;
	
	res.setHeader('Content-Type', 'application/json; charset=utf-8');

	if(method === 'GET'){
		if(url === '/'){
			const osInfo = {
				type: os.type(),
				hostname: os.hostname(),
				cpu_count: os.cpus().length,
				total_memory_mb: Math.floor(os.totalmem()/1024/1024),
				uptime_hours: Number((os.uptime()/ 3600).toFixed(2))
			}
			res.statusCode = 200;
			res.end(JSON.stringify(osInfo))
		} else if (url == '/health'){
			res.statusCode = 200;
			res.end(JSON.stringify(osInfo));
		}else{
			res.statusCode = 404;
			res.end();
		}
	}else{
		res.statusCode = 404;
		res.write('Unsupported method ...');
		res.end();
	}
});

server.listen(3000, '0.0.0.0', () => {
	console.log('listen 3000...');
});
