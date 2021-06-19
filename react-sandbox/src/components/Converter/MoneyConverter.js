export const numberFormatWithComma = (x) => {
    return (
        x
            .toString()
            // .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    )
}

export const stringToNumber = (stringNumber) => {
    return parseInt(stringNumber.replace(/,/g, ''))
}

export const numberToKorean = (amount) => {
    const unit = ['만 ', '억 ', '조 ', '경 ']
    const resultArray = unit.reduce((acc, current, index) => {
        const unitResult = Math.floor(
            (amount % Math.pow(10000, index + 1)) / Math.pow(10000, index),
        )

        if (unitResult > 0) {
            acc[index] = unitResult
        }
        return acc
    }, [])

    let result = ''
    for (const [index, value] of resultArray.entries()) {
        if (value) {
            result = numberFormatWithComma(value) + unit[index] + result
        }
    }

    return result.trimRight() + '원'
}
