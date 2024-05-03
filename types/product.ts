export interface Product {
    name: string
    main_image: string
    description: string
    features: string[]
    variations: Variation[]
    specifications: Specification[]
}

export interface Variation {
    name: string
    label: string
    images: string[]
}

export interface Specification {
    part: string
    value: {
        width?: string
        height?: string
        length?: string
        weight?: string
        voltage?: string
    }
}
