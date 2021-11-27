import {NestFactory} from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {AppModule} from './app.module';

async function start() {
	const PORT = process.env.port || 5000
	const app = await NestFactory.create(AppModule)

	const config = new DocumentBuilder()
		.setTitle('backend-project')
		.setDescription('first steps in backend')
		.setVersion('1.0.0')
		.addTag('IliaOv')
		.build()
	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('/api/docs', app, document)

	await app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
}

start()