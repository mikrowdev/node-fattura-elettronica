import { readFileSync } from 'fs';
import { resolve } from 'path';

/**
 * Build the yarn dependency string using version and repository.url from package.json
 *
 * Output to: docs/gitversion.txt
 */
export function getPackageJsonInfo(): { [key: string]: any } {
    // Make sure that package.json file exists
    const rootDir = resolve(__dirname, '..') as string;
    const pkgfile = resolve(rootDir, 'package.json');
    if (pkgfile === undefined) {
        throw new Error(`Required package.json not found in ${rootDir}`);
    }

    // Read version from package.json
    const data = readFileSync(pkgfile,'utf-8');
    const {name, version} = JSON.parse(data);
    if (version === undefined) {
        throw new Error('version not found in the package.json');
    }

    return {name, version};
}

try {
    const {name, version} = getPackageJsonInfo();
    console.log(version);
} catch (error) {
    console.warn(error);
}
