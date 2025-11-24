import { pgTable, uuid, timestamp, boolean, text } from 'drizzle-orm/pg-core';

export const dns = pgTable('dns', {
  id: uuid('id').defaultRandom().primaryKey(),
  url: text('url').notNull().unique(),
  description: text('description'),
  isActive: boolean('is_active').default(true).notNull(),
  isUsed: boolean('is_used').default(false).notNull(),
  usedAt: timestamp('used_at', { mode: 'date', withTimezone: true }),
  createdAt: timestamp('created_at', { mode: 'date', withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date', withTimezone: true }).defaultNow().notNull(),
});

