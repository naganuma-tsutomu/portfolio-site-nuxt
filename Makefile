up:
	docker compose up -d
stop:
	docker compose stop
down:
	docker compose down
restart:
	@make down
	@make up
nuxt:
	docker-compose exec nuxt bash
ps:
	docker compose ps
logs:
	docker compose logs
npm:
	npm i