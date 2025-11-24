import 'dotenv/config';
import { defineConfig } from 'prisma/config';

if (!process.env.DATABASE_URL) {
    throw new Error('Missing required env var DATABASE_URL');
}

export default defineConfig({
    datasource: {
        url: process.env.DATABASE_URL!, // non-null assertion after check
    },
    schema: 'prisma/schema.prisma',
});