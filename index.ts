// auto-loads .env file:
import 'jsr:@std/dotenv/load'
import * as postgres from 'https://deno.land/x/postgres@v0.17.0/mod.ts'

const databaseUrl = Deno.env.get('DATABASE_URL')!
const pool = new postgres.Pool(databaseUrl, 3, true)
const connection = await pool.connect()

Deno.serve(async (req: Request) => {
	if (req.body === null) {
		return new Response('Please provide a JSON body')
	}
	const data = await req.json()
	const { sleep, mood, timestamp } = data
	await connection.queryObject`
		INSERT INTO moods_import (sleep, mood, timestamp)
		VALUES (${sleep}, ${mood}, ${timestamp})
	`
	return new Response('successfully wrote to database')
})
