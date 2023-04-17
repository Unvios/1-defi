export function getOne<T, K extends keyof T>(arr: T[], prop: K, value: T[K]): T {
    const result = arr.filter(i => i[prop] === value)

    if (!result[0]) {
        throw new Error(`Not found: ${JSON.stringify(arguments)}`)
    }

    if (result.length > 1) {
        throw new Error(`Found multiple: ${JSON.stringify(arguments)}`)
    }

    return result[0]
}
