import { pgTable, uuid, varchar, timestamp, boolean, text, integer, numeric, jsonb } from 'drizzle-orm/pg-core';
import { dns } from './dns';

export const packages = pgTable('packages', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  slug: varchar('slug', { length: 100 }).notNull().unique(),
  description: text('description'),
  images: jsonb('images').$type<{ dark: string | null; light: string | null }>(),
  platformIcons: jsonb('platform_icons').$type<string[]>(),
  monthlyPrice: numeric('monthly_price', { precision: 10, scale: 2 }).notNull(),
  extraDevicePrice: numeric('extra_device_price', { precision: 10, scale: 2 }).notNull(),
  features: text('features').array(),
  isFeatured: boolean('is_featured').default(false).notNull(),
  displayOrder: integer('display_order').default(0).notNull(),
  isActive: boolean('is_active').default(true).notNull(),
  dnsId: uuid('dns_id').references(() => dns.id, { onDelete: 'set null' }),
  createdAt: timestamp('created_at', { mode: 'date', withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date', withTimezone: true }).defaultNow().notNull(),
});

