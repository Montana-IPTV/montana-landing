import { pgTable, uuid, integer, numeric, boolean, timestamp } from 'drizzle-orm/pg-core';
import { packages } from './packages';

export const packageDurations = pgTable('package_durations', {
  id: uuid('id').defaultRandom().primaryKey(),
  packageId: uuid('package_id').notNull().references(() => packages.id, { onDelete: 'cascade' }),
  months: integer('months').notNull(),
  price: numeric('price', { precision: 10, scale: 2 }).notNull(),
  discountPercentage: integer('discount_percentage').default(0).notNull(),
  displayOrder: integer('display_order').default(0).notNull(),
  isActive: boolean('is_active').default(true).notNull(),
  createdAt: timestamp('created_at', { mode: 'date', withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date', withTimezone: true }).defaultNow().notNull(),
});

