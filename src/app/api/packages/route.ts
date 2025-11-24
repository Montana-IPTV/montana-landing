import { NextResponse } from 'next/server';
import { db } from '@/db';
import { packages, packageDurations } from '@/db/schema';
import { eq, asc } from 'drizzle-orm';
import { getCdnUrl } from '@/lib/cdn';

export const revalidate = 3600;

export async function GET() {
  try {
    const allPackages = await db
      .select()
      .from(packages)
      .where(eq(packages.isActive, true))
      .orderBy(asc(packages.displayOrder));

    const packagesWithDurations = await Promise.all(
      allPackages.map(async (pkg) => {
        const durations = await db
          .select()
          .from(packageDurations)
          .where(eq(packageDurations.packageId, pkg.id))
          .orderBy(asc(packageDurations.displayOrder));

        return {
          ...pkg,
          images: pkg.images ? {
            dark: pkg.images.dark ? getCdnUrl(pkg.images.dark) : null,
            light: pkg.images.light ? getCdnUrl(pkg.images.light) : null,
          } : null,
          platformIcons: pkg.platformIcons ? pkg.platformIcons.map(icon => getCdnUrl(icon)) : [],
          durations,
        };
      })
    );

    return NextResponse.json(packagesWithDurations);
  } catch (error) {
    console.error('Error fetching packages:', error);
    return NextResponse.json(
      { error: 'Paketler yüklenemedi' },
      { status: 500 }
    );
  }
}

