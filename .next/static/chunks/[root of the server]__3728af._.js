(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[root of the server]__3728af._.js", {

"[project]/src/store/customizer/CustomizerSlice.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "CustomizerSlice": ()=>CustomizerSlice,
    "default": ()=>__TURBOPACK__default__export__,
    "hoverSidebar": ()=>hoverSidebar,
    "setBorderRadius": ()=>setBorderRadius,
    "setCardShadow": ()=>setCardShadow,
    "setDarkMode": ()=>setDarkMode,
    "setDir": ()=>setDir,
    "setLanguage": ()=>setLanguage,
    "setTheme": ()=>setTheme,
    "toggleHorizontal": ()=>toggleHorizontal,
    "toggleLayout": ()=>toggleLayout,
    "toggleMobileSidebar": ()=>toggleMobileSidebar,
    "toggleSidebar": ()=>toggleSidebar
});
(()=>{
    const e = new Error("Cannot find module '@reduxjs/toolkit'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"__TURBOPACK__ecmascript__hoisting__location__";
;
const initialState = {
    activeDir: 'ltr',
    activeMode: 'light',
    activeTheme: 'BLUE_THEME',
    SidebarWidth: 270,
    MiniSidebarWidth: 87,
    TopbarHeight: 70,
    isLayout: 'full',
    isCollapse: false,
    isSidebarHover: false,
    isMobileSidebar: false,
    isHorizontal: false,
    isLanguage: 'en',
    isCardShadow: true,
    borderRadius: 7
};
const CustomizerSlice = createSlice({
    name: 'customizer',
    initialState,
    activeTheme: 'BLUE_THEME',
    reducers: {
        setTheme: (state, action)=>{
            state.activeTheme = action.payload;
        },
        setDarkMode: (state, action)=>{
            state.activeMode = action.payload;
        },
        setDir: (state, action)=>{
            state.activeDir = action.payload;
        },
        setLanguage: (state, action)=>{
            state.isLanguage = action.payload;
        },
        setCardShadow: (state, action)=>{
            state.isCardShadow = action.payload;
        },
        toggleSidebar: (state)=>{
            state.isCollapse = !state.isCollapse;
        },
        hoverSidebar: (state, action)=>{
            state.isSidebarHover = action.payload;
        },
        toggleMobileSidebar: (state)=>{
            state.isMobileSidebar = !state.isMobileSidebar;
        },
        toggleLayout: (state, action)=>{
            state.isLayout = action.payload;
        },
        toggleHorizontal: (state, action)=>{
            state.isHorizontal = action.payload;
        },
        setBorderRadius: (state, action)=>{
            state.borderRadius = action.payload;
        }
    }
});
const { setTheme, setDarkMode, setDir, toggleSidebar, hoverSidebar, toggleMobileSidebar, toggleLayout, setBorderRadius, toggleHorizontal, setLanguage, setCardShadow } = CustomizerSlice.actions;
const __TURBOPACK__default__export__ = CustomizerSlice.reducer;

})()),
"[project]/src/utils/axios.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const axiosServices = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create();
// interceptor for http
axiosServices.interceptors.response.use((response)=>response, (error)=>Promise.reject(error.response && error.response.data || 'Wrong Services'));
const __TURBOPACK__default__export__ = axiosServices;

})()),
"[project]/src/app/api/mock.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
(()=>{
    const e = new Error("Cannot find module 'axios-mock-adapter'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/utils/axios'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const mock = new AxiosMockAdapter(axios, {
    delayResponse: 0
});
const __TURBOPACK__default__export__ = mock;

})()),
"[project]/src/app/api/documents/ProductsData.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ProductsData": ()=>ProductsData,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$mock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/mock.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'date-fns'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'chance'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const chance = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chance$2f$chance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chance"]();
const ProductsData = [
    {
        title: 'How Innovation Works',
        price: 275,
        discount: 25,
        related: false,
        salesPrice: 350,
        category: [
            'books'
        ],
        gender: 'Men',
        rating: 3,
        stock: true,
        qty: 1,
        colors: [
            '#1890FF'
        ],
        photo: '/images/products/s1.jpg',
        id: 1,
        created: sub(new Date(), {
            days: 8,
            hours: 6,
            minutes: 20
        }),
        description: chance.paragraph({
            sentences: 2
        })
    },
    {
        title: 'Psalms Book for Growth',
        price: 89,
        discount: 10,
        related: true,
        salesPrice: 99,
        category: [
            'books'
        ],
        gender: 'Women',
        rating: 3,
        stock: false,
        qty: 1,
        colors: [
            '#1890FF',
            '#94D82D',
            '#FF4842'
        ],
        photo: '/images/products/s2.jpg',
        id: 2,
        created: sub(new Date(), {
            days: 10,
            hours: 8,
            minutes: 69
        }),
        description: chance.paragraph({
            sentences: 2
        })
    },
    {
        title: 'The Psychology of Money',
        price: 125,
        discount: 12,
        related: false,
        salesPrice: 137,
        category: [
            'fashion',
            'books'
        ],
        gender: 'Kids',
        rating: 3,
        stock: true,
        qty: 1,
        colors: [
            '#FF4842',
            '#1890FF',
            '#94D82D'
        ],
        photo: '/images/products/s3.jpg',
        id: 3,
        created: sub(new Date(), {
            days: 8,
            hours: 6,
            minutes: 20
        }),
        description: chance.paragraph({
            sentences: 2
        })
    },
    {
        title: 'Boat Headphone',
        price: 50,
        discount: 15,
        related: true,
        salesPrice: 65,
        category: [
            'electronics'
        ],
        gender: 'Men',
        rating: 3,
        stock: true,
        qty: 1,
        colors: [
            '#1890FF',
            '#94D82D',
            '#FFC107'
        ],
        photo: '/images/products/s4.jpg',
        id: 4,
        created: sub(new Date(), {
            days: 4,
            hours: 9,
            minutes: 40
        }),
        description: chance.paragraph({
            sentences: 2
        })
    },
    {
        title: 'MacBook Air Pro',
        price: 650,
        discount: 250,
        related: true,
        salesPrice: 900,
        category: [
            'fashion',
            'electronics'
        ],
        gender: 'Women',
        rating: 3,
        stock: false,
        qty: 1,
        colors: [
            '#00AB55',
            '#000000'
        ],
        photo: '/images/products/s5.jpg',
        id: 5,
        created: sub(new Date(), {
            days: 2,
            hours: 5,
            minutes: 50
        }),
        description: chance.paragraph({
            sentences: 2
        })
    },
    {
        title: 'Gaming Console',
        price: 25,
        discount: 6,
        related: true,
        salesPrice: 31,
        category: [
            'electronics'
        ],
        gender: 'Men',
        rating: 3,
        stock: true,
        qty: 1,
        colors: [
            '#FFC0CB',
            '#FF4842'
        ],
        photo: '/images/products/s6.jpg',
        id: 6,
        created: sub(new Date(), {
            days: 2,
            hours: 9,
            minutes: 45
        }),
        description: chance.paragraph({
            sentences: 2
        })
    },
    {
        title: 'Red Valvet Dress',
        price: 150,
        discount: 50,
        related: false,
        salesPrice: 200,
        category: [
            'fashion'
        ],
        gender: 'Women',
        rating: 3,
        stock: true,
        qty: 1,
        colors: [
            '#FF4842',
            '#1890FF',
            '#94D82D'
        ],
        photo: '/images/products/s7.jpg',
        id: 7,
        created: sub(new Date(), {
            days: 6,
            hours: 10,
            minutes: 0
        }),
        description: chance.paragraph({
            sentences: 2
        })
    },
    {
        title: 'Shoes for Girls',
        price: 300,
        discount: 80,
        related: false,
        salesPrice: 380,
        category: [
            'fashion',
            'toys'
        ],
        gender: 'Women',
        rating: 3,
        stock: true,
        qty: 1,
        colors: [
            '#1890FF',
            '#94D82D',
            '#FFC107'
        ],
        photo: '/images/products/s8.jpg',
        id: 8,
        created: sub(new Date(), {
            days: 7,
            hours: 5,
            minutes: 20
        }),
        description: chance.paragraph({
            sentences: 2
        })
    },
    {
        title: 'Short & Sweet Purse',
        price: 175,
        discount: 25,
        related: false,
        salesPrice: 200,
        category: [
            'fashion'
        ],
        gender: 'Women',
        rating: 3,
        stock: true,
        qty: 1,
        colors: [
            '#00AB55',
            '#000000'
        ],
        photo: '/images/products/s9.jpg',
        id: 9,
        created: sub(new Date(), {
            days: 8,
            hours: 6,
            minutes: 20
        }),
        description: chance.paragraph({
            sentences: 2
        })
    },
    {
        title: 'Toy Dino for Fun',
        price: 210,
        discount: 40,
        related: false,
        salesPrice: 250,
        category: [
            'toys'
        ],
        gender: 'Kids',
        rating: 3,
        stock: true,
        qty: 1,
        colors: [
            '#FFC0CB',
            '#FF4842'
        ],
        photo: '/images/products/s10.jpg',
        id: 10,
        created: sub(new Date(), {
            days: 6,
            hours: 6,
            minutes: 20
        }),
        description: chance.paragraph({
            sentences: 2
        })
    },
    {
        title: 'Cute Soft Teddybear',
        price: 285,
        discount: 60,
        related: false,
        salesPrice: 345,
        category: [
            'toys'
        ],
        gender: 'Kids',
        rating: 3,
        stock: true,
        qty: 1,
        colors: [
            '#FF4842',
            '#1890FF',
            '#94D82D'
        ],
        photo: '/images/products/s11.jpg',
        id: 11,
        created: sub(new Date(), {
            days: 1,
            hours: 6,
            minutes: 20
        }),
        description: chance.paragraph({
            sentences: 2
        })
    },
    {
        title: 'Little Angel Toy',
        price: 5,
        discount: 5,
        related: false,
        salesPrice: 10,
        category: [
            'toys'
        ],
        gender: 'Kids',
        rating: 3,
        stock: true,
        qty: 1,
        colors: [
            '#1890FF',
            '#94D82D',
            '#FFC107'
        ],
        photo: '/images/products/s12.jpg',
        id: 12,
        created: sub(new Date(), {
            days: 9,
            hours: 6,
            minutes: 20
        }),
        description: chance.paragraph({
            sentences: 2
        })
    }
];
__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$mock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].onGet('/api/data/documents/ProductsData').reply(()=>{
    return [
        200,
        'Hello'
    ];
});
const __TURBOPACK__default__export__ = ProductsData;

})()),
"[project]/src/store/apps/documents/DocumentsSlice.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "DocumentSlice": ()=>DocumentSlice,
    "SearchProduct": ()=>SearchProduct,
    "addToCart": ()=>addToCart,
    "decrement": ()=>decrement,
    "default": ()=>__TURBOPACK__default__export__,
    "deleteCart": ()=>deleteCart,
    "fetchProducts": ()=>fetchProducts,
    "filterProducts": ()=>filterProducts,
    "filterReset": ()=>filterReset,
    "getProducts": ()=>getProducts,
    "hasError": ()=>hasError,
    "increment": ()=>increment,
    "sortByColor": ()=>sortByColor,
    "sortByGender": ()=>sortByGender,
    "sortByPrice": ()=>sortByPrice,
    "sortByProducts": ()=>sortByProducts
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lodash/filter.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'lodash/map'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@reduxjs/toolkit'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$documents$2f$ProductsData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/documents/ProductsData.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const API_URL = '/api/data/documents/ProductsData';
const initialState = {
    products: [],
    productSearch: '',
    sortBy: 'newest',
    cart: [],
    total: 0,
    filters: {
        category: 'All',
        color: 'All',
        gender: 'All',
        price: 'All',
        rating: ''
    },
    error: ''
};
const DocumentSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'documents',
    initialState,
    reducers: {
        // HAS ERROR
        hasError (state, action) {
            state.error = action.payload;
        },
        // GET PRODUCTS
        getProducts: (state, action)=>{
            state.products = action.payload;
        },
        SearchProduct: (state, action)=>{
            state.productSearch = action.payload;
        },
        //  SORT  PRODUCTS
        sortByProducts (state, action) {
            state.sortBy = action.payload;
        },
        //  SORT  PRODUCTS
        sortByGender (state, action) {
            state.filters.gender = action.payload.gender;
        },
        //  SORT  By Color
        sortByColor (state, action) {
            state.filters.color = action.payload.color;
        },
        //  SORT  By Color
        sortByPrice (state, action) {
            state.filters.price = action.payload.price;
        },
        //  FILTER PRODUCTS
        filterProducts (state, action) {
            state.filters.category = action.payload.category;
        },
        //  FILTER Reset
        filterReset (state) {
            state.filters.category = 'All';
            state.filters.color = 'All';
            state.filters.gender = 'All';
            state.filters.price = 'All';
            state.sortBy = 'newest';
        },
        // ADD TO CART
        addToCart (state, action) {
            const product = action.payload;
            state.cart = [
                ...state.cart,
                product
            ];
        },
        // qty increment
        increment (state, action) {
            const productId = action.payload;
            const updateCart = map(state.cart, (product)=>{
                if (product.id === productId) {
                    return {
                        ...product,
                        qty: product.qty + 1
                    };
                }
                return product;
            });
            state.cart = updateCart;
        },
        // qty decrement
        decrement (state, action) {
            const productId = action.payload;
            const updateCart = map(state.cart, (product)=>{
                if (product.id === productId) {
                    return {
                        ...product,
                        qty: product.qty - 1
                    };
                }
                return product;
            });
            state.cart = updateCart;
        },
        // delete Cart
        deleteCart (state, action) {
            const updateCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(state.cart, (item)=>item.id !== action.payload);
            state.cart = updateCart;
        }
    }
});
const { hasError, getProducts, SearchProduct, sortByProducts, filterProducts, sortByGender, increment, deleteCart, decrement, addToCart, sortByPrice, filterReset, sortByColor } = DocumentSlice.actions;
const fetchProducts = ()=>async (dispatch)=>{
        console.log('fetch Products', API_URL, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$documents$2f$ProductsData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductsData"]);
        try {
            // const response = await axios.get(`${API_URL}`);
            // console.log({response})
            dispatch(getProducts(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$documents$2f$ProductsData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductsData"]));
        } catch (error) {
            dispatch(hasError(error));
        }
    };
const __TURBOPACK__default__export__ = DocumentSlice.reducer;

})()),
"[project]/src/app/api/chat/ChatData.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ChatData": ()=>ChatData,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$mock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/mock.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'chance'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'date-fns'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'lodash/uniqueId'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const chance = new Chance();
const ChatData = [
    {
        id: 1,
        name: 'James Johnson',
        status: 'online',
        thumb: '/images/profile/user-10.jpg',
        recent: false,
        excerpt: 'Theme Developer',
        messages: [
            {
                createdAt: sub(new Date(), {
                    hours: 1
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: 1,
                type: 'text',
                attachment: [
                    {
                        icon: '/images/chat/icon-adobe.svg',
                        file: 'service-task.pdf',
                        fileSize: '2MB'
                    },
                    {
                        icon: '/images/chat/icon-chrome.svg',
                        file: 'homepage-design.fig',
                        fileSize: '3MB'
                    },
                    {
                        icon: '/images/chat/icon-figma.svg',
                        file: 'about-us.html',
                        fileSize: '1KB'
                    },
                    {
                        icon: '/images/chat/icon-javascript.svg',
                        file: 'work-project.zip',
                        fileSize: '20MB'
                    },
                    {
                        icon: '/images/chat/icon-zip-folder.svg',
                        file: 'custom.js',
                        fileSize: '2MB'
                    }
                ],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), {
                    minutes: 30
                }),
                msg: chance.sentence({
                    words: 10
                }),
                senderId: 1,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), {
                    minutes: 6
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: uniqueId(),
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                msg: '/images/blog/blog-img1.jpg',
                senderId: uniqueId(),
                type: 'image',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), {
                    minutes: 5
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: 1,
                type: 'text',
                attachment: [],
                id: uniqueId()
            }
        ]
    },
    {
        id: 2,
        name: 'Maria Hernandez',
        status: 'away',
        thumb: '/images/profile/user-9.jpg',
        recent: true,
        excerpt: 'Doctor',
        messages: [
            {
                createdAt: sub(new Date(), {
                    hours: 1
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: uniqueId(),
                type: 'text',
                attachment: [
                    {
                        icon: '/images/chat/icon-adobe.svg',
                        file: 'service-task.pdf',
                        fileSize: '2MB'
                    },
                    {
                        icon: '/images/chat/icon-chrome.svg',
                        file: 'homepage-design.fig',
                        fileSize: '3MB'
                    },
                    {
                        icon: '/images/chat/icon-javascript.svg',
                        file: 'work-project.zip',
                        fileSize: '20MB'
                    },
                    {
                        icon: '/images/chat/icon-zip-folder.svg',
                        file: 'custom.js',
                        fileSize: '2MB'
                    }
                ],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), {
                    minutes: 30
                }),
                msg: chance.sentence({
                    words: 10
                }),
                senderId: uniqueId(),
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), {
                    minutes: 6
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: 2,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                msg: '/images/blog/blog-img1.jpg',
                senderId: 2,
                type: 'image',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), {
                    minutes: 1
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: uniqueId(),
                type: 'text',
                attachment: [],
                id: uniqueId()
            }
        ]
    },
    {
        id: 3,
        name: 'David Smith',
        status: 'busy',
        thumb: '/images/profile/user-3.jpg',
        recent: false,
        excerpt: 'Hacker',
        messages: [
            {
                createdAt: sub(new Date(), {
                    hours: 10
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: 1,
                type: 'text',
                attachment: [
                    {
                        icon: '/images/chat/icon-adobe.svg',
                        file: 'service-task.pdf',
                        fileSize: '2MB'
                    },
                    {
                        icon: '/images/chat/icon-zip-folder.svg',
                        file: 'custom.js',
                        fileSize: '2MB'
                    }
                ],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), {
                    minutes: 30
                }),
                msg: chance.sentence({
                    words: 10
                }),
                senderId: 1,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), {
                    minutes: 6
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: 3,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), {
                    minutes: 6
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: 3,
                type: 'text',
                attachment: [],
                id: uniqueId()
            }
        ]
    },
    {
        id: 4,
        name: 'Maria Rodriguez',
        status: 'offline',
        thumb: '/images/profile/user-2.jpg',
        recent: true,
        excerpt: 'Please wait outside of the house',
        messages: [
            {
                createdAt: sub(new Date(), {
                    hours: 1
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: 1,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), {
                    hours: 10
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: 4,
                type: 'text',
                attachment: [
                    {
                        icon: '/images/chat/icon-javascript.svg',
                        file: 'work-project.zip',
                        fileSize: '20MB'
                    },
                    {
                        icon: '/images/chat/icon-zip-folder.svg',
                        file: 'custom.js',
                        fileSize: '2MB'
                    }
                ],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), {
                    hours: 11
                }),
                msg: '/images/blog/blog-img1.jpg',
                senderId: uniqueId(),
                type: 'image',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), {
                    minutes: 6
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: 4,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), {
                    minutes: 1
                }),
                msg: chance.sentence({
                    words: 7
                }),
                senderId: 3,
                type: 'text',
                attachment: [],
                id: uniqueId()
            }
        ]
    },
    {
        id: 5,
        name: 'Robert Smith',
        status: 'online',
        thumb: '/images/profile/user-5.jpg',
        recent: true,
        excerpt: 'Front End Developer',
        messages: [
            {
                createdAt: sub(new Date(), {
                    hours: 1
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: 1,
                type: 'text',
                attachment: [
                    {
                        icon: '/images/chat/icon-adobe.svg',
                        file: 'service-task.pdf',
                        fileSize: '2MB'
                    },
                    {
                        icon: '/images/chat/icon-chrome.svg',
                        file: 'homepage-design.fig',
                        fileSize: '3MB'
                    },
                    {
                        icon: '/images/chat/icon-figma.svg',
                        file: 'about-us.html',
                        fileSize: '1KB'
                    },
                    {
                        icon: '/images/chat/icon-javascript.svg',
                        file: 'work-project.zip',
                        fileSize: '20MB'
                    },
                    {
                        icon: '/images/chat/icon-zip-folder.svg',
                        file: 'custom.js',
                        fileSize: '2MB'
                    }
                ],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), {
                    minutes: 30
                }),
                msg: chance.sentence({
                    words: 10
                }),
                senderId: 1,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), {
                    minutes: 6
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: uniqueId(),
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                msg: '/images/blog/blog-img1.jpg',
                senderId: 5,
                type: 'image',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), {
                    minutes: 5
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: 5,
                type: 'text',
                attachment: [],
                id: uniqueId()
            }
        ]
    },
    {
        id: 6,
        name: 'Joseph Sarah',
        status: 'busy',
        thumb: '/images/profile/user-10.jpg',
        recent: false,
        excerpt: 'Graphics Designer',
        messages: [
            {
                createdAt: sub(new Date(), {
                    hours: 10
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: 1,
                type: 'text',
                attachment: [
                    {
                        icon: '/images/chat/icon-chrome.svg',
                        file: 'homepage-design.fig',
                        fileSize: '3MB'
                    },
                    {
                        icon: '/images/chat/icon-javascript.svg',
                        file: 'work-project.zip',
                        fileSize: '20MB'
                    },
                    {
                        icon: '/images/chat/icon-zip-folder.svg',
                        file: 'custom.js',
                        fileSize: '2MB'
                    }
                ],
                id: uniqueId()
            },
            {
                msg: '/images/blog/blog-img1.jpg',
                senderId: uniqueId(),
                type: 'image',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), {
                    minutes: 5
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: 1,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), {
                    minutes: 2
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: 6,
                type: 'text',
                attachment: [],
                id: uniqueId()
            }
        ]
    },
    {
        id: 7,
        name: 'Thomas Smith',
        status: 'away',
        thumb: '/images/profile/user-8.jpg',
        recent: true,
        excerpt: 'Back End Developer',
        messages: [
            {
                createdAt: sub(new Date(), {
                    hours: 10
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: 1,
                type: 'text',
                attachment: [
                    {
                        icon: '/images/chat/icon-adobe.svg',
                        file: 'service-task.pdf',
                        fileSize: '2MB'
                    },
                    {
                        icon: '/images/chat/icon-chrome.svg',
                        file: 'homepage-design.fig',
                        fileSize: '3MB'
                    }
                ],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), {
                    hours: 1
                }),
                msg: chance.sentence({
                    words: 10
                }),
                senderId: 1,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), {
                    minutes: 15
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: 7,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), {
                    minutes: 10
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: 7,
                type: 'text',
                attachment: [],
                id: uniqueId()
            }
        ]
    },
    {
        id: 8,
        name: 'David Elizabeth',
        status: 'offline',
        thumb: '/images/profile/user-3.jpg',
        recent: false,
        excerpt: 'Theme Developer',
        messages: [
            {
                createdAt: sub(new Date(), {
                    hours: 10
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: 1,
                type: 'text',
                attachment: [
                    {
                        icon: '/images/chat/icon-adobe.svg',
                        file: 'service-task.pdf',
                        fileSize: '2MB'
                    },
                    {
                        icon: '/images/chat/icon-javascript.svg',
                        file: 'work-project.zip',
                        fileSize: '20MB'
                    },
                    {
                        icon: '/images/chat/icon-zip-folder.svg',
                        file: 'custom.js',
                        fileSize: '2MB'
                    }
                ],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), {
                    hours: 6
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: 3,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), {
                    hours: 6
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: 1,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), {
                    minutes: 1
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: 8,
                type: 'text',
                attachment: [],
                id: uniqueId()
            }
        ]
    },
    {
        id: 9,
        name: 'Charles Martha',
        status: 'online',
        thumb: '/images/profile/user-4.jpg',
        recent: false,
        excerpt: 'Administrator',
        messages: [
            {
                createdAt: sub(new Date(), {
                    hours: 10
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: 1,
                type: 'text',
                attachment: [
                    {
                        icon: '/images/chat/icon-javascript.svg',
                        file: 'work-project.zip',
                        fileSize: '20MB'
                    },
                    {
                        icon: '/images/chat/icon-zip-folder.svg',
                        file: 'custom.js',
                        fileSize: '2MB'
                    }
                ],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), {
                    hours: 8
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: 3,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), {
                    hours: 8
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: 3,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), {
                    minutes: 5
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: 9,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), {
                    minutes: 2
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: 9,
                type: 'text',
                attachment: [],
                id: uniqueId()
            }
        ]
    },
    {
        id: 10,
        name: 'Samuel Eliza',
        status: 'online',
        thumb: '/images/profile/user-5.jpg',
        recent: false,
        excerpt: 'Doctor',
        messages: [
            {
                createdAt: sub(new Date(), {
                    hours: 10
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: 1,
                type: 'text',
                attachment: [
                    {
                        icon: '/images/chat/icon-adobe.svg',
                        file: 'service-task.pdf',
                        fileSize: '2MB'
                    },
                    {
                        icon: '/images/chat/icon-zip-folder.svg',
                        file: 'custom.js',
                        fileSize: '2MB'
                    }
                ],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), {
                    hours: 11
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: 3,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), {
                    hours: 6
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: 3,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), {
                    hours: 6
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: 3,
                type: 'text',
                attachment: [],
                id: uniqueId()
            },
            {
                createdAt: sub(new Date(), {
                    minutes: 6
                }),
                msg: chance.sentence({
                    words: 5
                }),
                senderId: 10,
                type: 'text',
                attachment: [],
                id: uniqueId()
            }
        ]
    }
];
__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$mock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].onGet('/api/data/chat/ChatData').reply(()=>{
    return [
        200,
        ChatData
    ];
});
const __TURBOPACK__default__export__ = ChatData;

})()),
"[project]/src/store/apps/chats/ChatSlice.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ChatSlice": ()=>ChatSlice,
    "SearchChat": ()=>SearchChat,
    "SelectChat": ()=>SelectChat,
    "default": ()=>__TURBOPACK__default__export__,
    "fetchChats": ()=>fetchChats,
    "getChats": ()=>getChats,
    "sendMsg": ()=>sendMsg
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$uniqueId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lodash/uniqueId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$sub$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/date-fns/sub.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$chat$2f$ChatData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/chat/ChatData.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const API_URL = '/api/data/chat/ChatData';
const initialState = {
    chats: [],
    chatContent: 1,
    chatSearch: ''
};
const ChatSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'chat',
    initialState,
    reducers: {
        getChats: (state, action)=>{
            state.chats = action.payload;
        },
        SearchChat: (state, action)=>{
            state.chatSearch = action.payload;
        },
        SelectChat: (state, action)=>{
            state.chatContent = action.payload;
        },
        sendMsg: (state, action)=>{
            const conversation = action.payload;
            const { id, msg } = conversation;
            const newMessage = {
                id: id,
                msg: msg,
                type: 'text',
                attachments: [],
                createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$sub$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sub"])(new Date(), {
                    seconds: 1
                }),
                senderId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$uniqueId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])()
            };
            state.chats = state.chats.map((chat)=>chat.id === action.payload.id ? {
                    ...chat,
                    ...chat.messages.push(newMessage)
                } : chat);
        }
    }
});
const { SearchChat, getChats, sendMsg, SelectChat } = ChatSlice.actions;
const fetchChats = ()=>async (dispatch)=>{
        try {
            dispatch(getChats(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$chat$2f$ChatData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatData"]));
        } catch (err) {
            throw new Error(err);
        }
    };
const __TURBOPACK__default__export__ = ChatSlice.reducer;

})()),
"[project]/src/store/store.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "persistor": ()=>persistor,
    "store": ()=>store
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js [app-client] (ecmascript) <locals>");
(()=>{
    const e = new Error("Cannot find module 'redux-persist'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__persistStore$3e$__ = __turbopack_import__("[project]/node_modules/redux-persist/es/persistStore.js [app-client] (ecmascript) <export default as persistStore>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$lib$2f$storage$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/redux-persist/lib/storage/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customizer$2f$CustomizerSlice$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/customizer/CustomizerSlice.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$apps$2f$documents$2f$DocumentsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/apps/documents/DocumentsSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$apps$2f$chats$2f$ChatSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/apps/chats/ChatSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
const persistConfig = {
    key: 'root',
    storage: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$lib$2f$storage$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        customizer: persistReducer(persistConfig, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$customizer$2f$CustomizerSlice$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]),
        documentReducer: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$apps$2f$documents$2f$DocumentsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        chatReducer: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$apps$2f$chats$2f$ChatSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    devTools: ("TURBOPACK compile-time value", "development") !== 'production',
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false
        })
});
const persistor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$persistStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__persistStore$3e$__["persistStore"])(store);

})()),
"[project]/src/store/providers.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Providers": ()=>Providers
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/store.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-redux/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$components$2f$Provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Provider$3e$__ = __turbopack_import__("[project]/node_modules/react-redux/es/components/Provider.js [app-client] (ecmascript) <export default as Provider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$integration$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/redux-persist/es/integration/react.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$components$2f$Provider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Provider$3e$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$redux$2d$persist$2f$es$2f$integration$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistGate"], {
            loading: null,
            persistor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persistor"],
            children: children
        }, void 0, false, {
            fileName: "[project]/src/store/providers.jsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/store/providers.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = Providers;
var _c;
__turbopack_refresh__.register(_c, "Providers");

})()),
"[project]/src/app/(DashboardLayout)/layout/shared/customizer/RTL.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$cache$2f$dist$2f$emotion$2d$cache$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@emotion/cache/dist/emotion-cache.browser.development.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$7a1343fa$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__CacheProvider$3e$__ = __turbopack_import__("[project]/node_modules/@emotion/react/dist/emotion-element-7a1343fa.browser.development.esm.js [app-client] (ecmascript) <export C as CacheProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2d$plugin$2d$rtl$2f$dist$2f$stylis$2d$rtl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis-plugin-rtl/dist/stylis-rtl.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
const styleCache = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$cache$2f$dist$2f$emotion$2d$cache$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        key: 'rtl',
        prepend: true,
        // We have to temporary ignore this due to incorrect definitions
        // in the stylis-plugin-rtl module
        // @see https://github.com/styled-components/stylis-plugin-rtl/issues/23
        stylisPlugins: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2d$plugin$2d$rtl$2f$dist$2f$stylis$2d$rtl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        ]
    });
const RTL = (props)=>{
    _s();
    const { children, direction } = props;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.dir = direction;
    }, [
        direction
    ]);
    if (direction === 'rtl') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$7a1343fa$2e$browser$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__CacheProvider$3e$__["CacheProvider"], {
            value: styleCache(),
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/(DashboardLayout)/layout/shared/customizer/RTL.jsx",
            lineNumber: 26,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
};
_s(RTL, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = RTL;
const __TURBOPACK__default__export__ = RTL;
var _c;
__turbopack_refresh__.register(_c, "RTL");

})()),
"[project]/src/utils/theme/DefaultColors.jsx [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/src/utils/theme/DefaultColors.jsx'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/src/utils/theme/Components.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// project imports
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$DefaultColors$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/theme/DefaultColors.jsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const components = (theme)=>{
    return {
        MuiCssBaseline: {
            styleOverrides: {
                '*': {
                    boxSizing: 'border-box'
                },
                html: {
                    height: '100%',
                    width: '100%'
                },
                a: {
                    textDecoration: 'none'
                },
                body: {
                    height: '100%',
                    margin: 0,
                    padding: 0
                },
                '#root': {
                    height: '100%'
                },
                "*[dir='rtl'] .buyNowImg": {
                    transform: 'scaleX(-1)'
                },
                '.border-none': {
                    border: '0px',
                    td: {
                        border: '0px'
                    }
                },
                '.btn-xs': {
                    minWidth: '30px !important',
                    width: '30px',
                    height: '30px',
                    borderRadius: '6px !important',
                    padding: '0px !important'
                },
                '.hover-text-primary:hover .text-hover': {
                    color: theme.palette.primary.main
                },
                '.hoverCard:hover': {
                    scale: '1.01',
                    transition: ' 0.1s ease-in'
                },
                '.signup-bg': {
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    height: '100%'
                },
                '.MuiBox-root': {
                    borderRadius: theme.shape.borderRadius
                },
                '.MuiCardHeader-action': {
                    alignSelf: 'center !important'
                },
                '.emoji-picker-react .emoji-scroll-wrapper': {
                    overflowX: 'hidden'
                },
                '.scrollbar-container': {
                    borderRight: '0 !important'
                },
                '.theme-timeline .MuiTimelineOppositeContent-root': {
                    minWidth: '90px'
                },
                '.MuiAlert-root .MuiAlert-icon': {
                    color: 'inherit!important'
                },
                '.MuiTimelineConnector-root': {
                    width: '1px !important'
                },
                ' .simplebar-scrollbar:before': {
                    background: `${theme.palette.grey[300]} !important`
                },
                '@keyframes gradient': {
                    '0%': {
                        backgroundPosition: '0% 50%'
                    },
                    '50%': {
                        backgroundPosition: ' 100% 50%'
                    },
                    '100% ': {
                        backgroundPosition: ' 0% 50%'
                    }
                },
                '.rounded-bars .apexcharts-bar-series.apexcharts-plot-series .apexcharts-series path': {
                    clipPath: 'inset(0 0 5% 0 round 20px)'
                }
            }
        },
        MuiButtonGroup: {
            styleOverrides: {
                root: {
                    boxShadow: 'none'
                }
            }
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    ':before': {
                        backgroundColor: theme.palette.grey[100]
                    }
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    // border: `1px solid ${theme.palette.divider}`,
                    backgroundImage: 'none'
                }
            }
        },
        MuiStepConnector: {
            styleOverrides: {
                line: {
                    borderColor: theme.palette.divider
                }
            }
        },
        MuiFab: {
            styleOverrides: {
                root: {
                    boxShadow: 'none'
                },
                sizeSmall: {
                    width: 30,
                    height: 30,
                    minHeight: 30
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    boxShadow: 'none'
                },
                text: {
                    padding: '5px 15px'
                },
                textPrimary: {
                    backgroundColor: theme.palette.primary.light,
                    '&:hover': {
                        backgroundColor: theme.palette.primary.main,
                        color: 'white'
                    }
                },
                textSecondary: {
                    backgroundColor: theme.palette.secondary.light,
                    '&:hover': {
                        backgroundColor: theme.palette.secondary.main,
                        color: 'white'
                    }
                },
                textSuccess: {
                    backgroundColor: theme.palette.success.light,
                    '&:hover': {
                        backgroundColor: theme.palette.success.main,
                        color: 'white'
                    }
                },
                textError: {
                    backgroundColor: theme.palette.error.light,
                    '&:hover': {
                        backgroundColor: theme.palette.error.main,
                        color: 'white'
                    }
                },
                textInfo: {
                    backgroundColor: theme.palette.info.light,
                    '&:hover': {
                        backgroundColor: theme.palette.info.main,
                        color: 'white'
                    }
                },
                textWarning: {
                    backgroundColor: theme.palette.warning.light,
                    '&:hover': {
                        backgroundColor: theme.palette.warning.main,
                        color: 'white'
                    }
                },
                outlinedPrimary: {
                    '&:hover': {
                        backgroundColor: theme.palette.primary.main,
                        color: 'white'
                    }
                },
                outlinedSecondary: {
                    '&:hover': {
                        backgroundColor: theme.palette.secondary.main,
                        color: 'white'
                    }
                },
                outlinedError: {
                    '&:hover': {
                        backgroundColor: theme.palette.error.main,
                        color: 'white'
                    }
                },
                outlinedSuccess: {
                    '&:hover': {
                        backgroundColor: theme.palette.success.main,
                        color: 'white'
                    }
                },
                outlinedInfo: {
                    '&:hover': {
                        backgroundColor: theme.palette.info.main,
                        color: 'white'
                    }
                },
                outlinedWarning: {
                    '&:hover': {
                        backgroundColor: theme.palette.warning.main,
                        color: 'white'
                    }
                }
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    padding: '16px 24px'
                },
                title: {
                    fontSize: '1.125rem'
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    width: '100%',
                    padding: '15px',
                    backgroundImage: 'none'
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '24px'
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: `1px solid ${theme.palette.divider}`
                }
            }
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    '&:last-child td': {
                        borderBottom: 0
                    }
                }
            }
        },
        MuiGridItem: {
            styleOverrides: {
                root: {
                    paddingTop: '30px',
                    paddingLeft: '30px !important'
                }
            }
        },
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.grey[200],
                    borderRadius: '6px'
                }
            }
        },
        MuiTimelineConnector: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.divider
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: theme.palette.divider
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontWeight: 600,
                    fontSize: '0.75rem'
                }
            }
        },
        MuiAlert: {
            styleOverrides: {
                filledSuccess: {
                    color: 'white'
                },
                filledInfo: {
                    color: 'white'
                },
                filledError: {
                    color: 'white'
                },
                filledWarning: {
                    color: 'white'
                },
                standardSuccess: {
                    backgroundColor: theme.palette.success.light,
                    color: theme.palette.success.main
                },
                standardError: {
                    backgroundColor: theme.palette.error.light,
                    color: theme.palette.error.main
                },
                standardWarning: {
                    backgroundColor: theme.palette.warning.light,
                    color: theme.palette.warning.main
                },
                standardInfo: {
                    backgroundColor: theme.palette.info.light,
                    color: theme.palette.info.main
                },
                outlinedSuccess: {
                    borderColor: theme.palette.success.main,
                    color: theme.palette.success.main
                },
                outlinedWarning: {
                    borderColor: theme.palette.warning.main,
                    color: theme.palette.warning.main
                },
                outlinedError: {
                    borderColor: theme.palette.error.main,
                    color: theme.palette.error.main
                },
                outlinedInfo: {
                    borderColor: theme.palette.info.main,
                    color: theme.palette.info.main
                },
                successIcon: {
                    color: theme.palette.info.main
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[200] : theme.palette.grey[300]
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.grey[300]
                    }
                },
                input: {
                    padding: '12px 14px'
                },
                inputSizeSmall: {
                    padding: '8px 14px'
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    color: theme.palette.background.paper,
                    background: theme.palette.text.primary
                }
            }
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    borderColor: `${theme.palette.divider}`
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    fontSize: '1.25rem'
                }
            }
        },
        MuiPopover: {
            styleOverrides: {
                paper: {
                    boxShadow: 'rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px'
                }
            }
        }
    };
};
const __TURBOPACK__default__export__ = components;

})()),
"[next]/internal/font/google/montserrat_c433fd19.module.css [app-client] (css module)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "className": "montserrat_c433fd19-module__i0CXdG__className",
});

})()),
"[next]/internal/font/google/montserrat_c433fd19.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$montserrat_c433fd19$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[next]/internal/font/google/montserrat_c433fd19.module.css [app-client] (css module)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$montserrat_c433fd19$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'__Montserrat_c433fd', Roboto, Arial, sans-serif",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$montserrat_c433fd19$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$montserrat_c433fd19$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;

})()),
"[project]/src/utils/theme/Typography.jsx [app-client] (ecmascript) <locals>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$montserrat_c433fd19$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/font/google/montserrat_c433fd19.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const typography = {
    fontFamily: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$montserrat_c433fd19$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].style.fontFamily,
    h1: {
        fontWeight: 600,
        fontSize: '2.25rem',
        lineHeight: '2.75rem'
    },
    h2: {
        fontWeight: 600,
        fontSize: '1.875rem',
        lineHeight: '2.25rem'
    },
    h3: {
        fontWeight: 600,
        fontSize: '1.5rem',
        lineHeight: '1.75rem'
    },
    h4: {
        fontWeight: 600,
        fontSize: '1.3125rem',
        lineHeight: '1.6rem'
    },
    h5: {
        fontWeight: 600,
        fontSize: '1.125rem',
        lineHeight: '1.6rem'
    },
    h6: {
        fontWeight: 600,
        fontSize: '1rem',
        lineHeight: '1.2rem'
    },
    button: {
        textTransform: 'capitalize',
        fontWeight: 400
    },
    body1: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: '1.334rem'
    },
    body2: {
        fontSize: '0.75rem',
        letterSpacing: '0rem',
        fontWeight: 400,
        lineHeight: '1rem'
    },
    subtitle1: {
        fontSize: '0.875rem',
        fontWeight: 400
    },
    subtitle2: {
        fontSize: '0.875rem',
        fontWeight: 400
    }
};
const __TURBOPACK__default__export__ = typography;
;
 // --site-primary-100-color: #e8f3fc;
 // --site-primary-200-color: #d2e7f9;
 // --site-primary-300-color: #4ba0e8;
 // --site-primary-400-color: #1e88e2;
 // --site-primary-500-color: #1b7acb;

})()),
"[project]/src/utils/theme/Typography.jsx [app-client] (ecmascript) <module evaluation>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$montserrat_c433fd19$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/font/google/montserrat_c433fd19.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$Typography$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/src/utils/theme/Typography.jsx [app-client] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/src/utils/theme/Shadows.jsx [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/src/utils/theme/Shadows.jsx'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/src/utils/theme/DarkThemeColors.jsx [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/src/utils/theme/DarkThemeColors.jsx'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/src/utils/theme/LightThemeColors.jsx [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

const e = new Error("Could not parse module '[project]/src/utils/theme/LightThemeColors.jsx'");
e.code = 'MODULE_UNPARSEABLE';
throw e;
}.call(this) }),
"[project]/src/utils/theme/Theme.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "BuildTheme": ()=>BuildTheme,
    "ThemeSettings": ()=>ThemeSettings
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$lodash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lodash/lodash.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/createTheme.js [app-client] (ecmascript) <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-redux/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$hooks$2f$useSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/es/hooks/useSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$Components$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/theme/Components.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$Typography$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/utils/theme/Typography.jsx [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$Typography$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/src/utils/theme/Typography.jsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$Shadows$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/theme/Shadows.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$DarkThemeColors$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/theme/DarkThemeColors.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$LightThemeColors$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/theme/LightThemeColors.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$DefaultColors$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/theme/DefaultColors.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$locale$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/locale/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
;
;
;
;
const BuildTheme = (config)=>{
    _s();
    const themeOptions = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$LightThemeColors$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LightThemeColors"].find((theme)=>theme.name === config.theme);
    const darkthemeOptions = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$DarkThemeColors$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DarkThemeColors"].find((theme)=>theme.name === config.theme);
    const customizer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$hooks$2f$useSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.customizer);
    const defaultTheme = customizer.activeMode === 'dark' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$DefaultColors$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseDarkTheme"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$DefaultColors$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baselightTheme"];
    const defaultShadow = customizer.activeMode === 'dark' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$Shadows$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["darkshadows"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$Shadows$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadows"];
    const themeSelect = customizer.activeMode === 'dark' ? darkthemeOptions : themeOptions;
    const baseMode = {
        palette: {
            mode: customizer.activeMode
        },
        shape: {
            borderRadius: customizer.borderRadius
        },
        shadows: defaultShadow,
        typography: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$Typography$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]
    };
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$lodash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].merge({}, baseMode, defaultTheme, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$locale$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__, themeSelect, {
        direction: config.direction
    }));
    theme.components = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$Components$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(theme);
    return theme;
};
_s(BuildTheme, "7L49aKuvK8zXbyZ3EYb144xgEoE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$hooks$2f$useSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = BuildTheme;
const ThemeSettings = ()=>{
    _s1();
    const activDir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$hooks$2f$useSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.customizer.activeDir);
    const activeTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$hooks$2f$useSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.customizer.activeTheme);
    const theme = BuildTheme({
        direction: activDir,
        theme: activeTheme
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.dir = activDir;
    }, [
        activDir
    ]);
    return theme;
};
_s1(ThemeSettings, "5UlQ6UDHCo/1aP2NYl8OxsFrZRo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$hooks$2f$useSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$hooks$2f$useSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c1 = ThemeSettings;
;
var _c, _c1;
__turbopack_refresh__.register(_c, "BuildTheme");
__turbopack_refresh__.register(_c1, "ThemeSettings");

})()),
"[project]/src/utils/languages/en.json (json)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__(JSON.parse("{\"Starter\":\"Starter\",\"Menu Level\":\"Menu Level\",\"Disabled\":\"Disabled\",\"SubCaption\":\"SubCaption\",\"Chip\":\"Chip\",\"Outlined\":\"Outlined\",\"External Link\":\"External Link\"}"));
})()),
"[project]/src/utils/languages/fr.json (json)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__(JSON.parse("{\"Starter\":\"entrée\",\"Menu Level\":\"Niveau menu\",\"Disabled\":\"Désactivé\",\"SubCaption\":\"Sous-titre\",\"Chip\":\"Ébrécher\",\"Outlined\":\"Décrite\",\"External Link\":\"lien externe\"}"));
})()),
"[project]/src/utils/languages/ar.json (json)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__(JSON.parse("{\"Starter\":\"بداية\",\"Menu Level\":\"مستوى القائمة\",\"Disabled\":\"عاجز\",\"SubCaption\":\"التسمية الفرعية\",\"Chip\":\"رقاقة\",\"Outlined\":\"موجز\",\"External Link\":\"رابط خارجي\"}"));
})()),
"[project]/src/utils/languages/ch.json (json)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__(JSON.parse("{\"Starter\":\"起动机\",\"Menu Level\":\"菜单层\",\"Disabled\":\"残疾人\",\"SubCaption\":\"字幕\",\"Chip\":\"芯片\",\"Outlined\":\"概述\",\"External Link\":\"外部链接\"}"));
})()),
"[project]/src/utils/i18n.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/i18next/dist/esm/i18next.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-i18next/dist/es/initReactI18next.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$languages$2f$en$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/utils/languages/en.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$languages$2f$fr$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/utils/languages/fr.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$languages$2f$ar$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/utils/languages/ar.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$languages$2f$ch$2e$json__$28$json$29$__ = __turbopack_import__("[project]/src/utils/languages/ch.json (json)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
const resources = {
    en: {
        translation: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$languages$2f$en$2e$json__$28$json$29$__["default"]
    },
    fr: {
        translation: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$languages$2f$fr$2e$json__$28$json$29$__["default"]
    },
    ar: {
        translation: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$languages$2f$ar$2e$json__$28$json$29$__["default"]
    },
    ch: {
        translation: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$languages$2f$ch$2e$json__$28$json$29$__["default"]
    }
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].use(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initReactI18next"]) // passes i18n down to react-i18next
.init({
    resources,
    lng: 'en',
    interpolation: {
        escapeValue: false
    }
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];

})()),
"[project]/src/app/api/index.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$mock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/mock.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$mock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].onAny().passThrough();

})()),
"[project]/src/app/app.jsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/styles/ThemeProvider.js [app-client] (ecmascript) <export default as ThemeProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/material/CssBaseline/CssBaseline.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$DashboardLayout$292f$layout$2f$shared$2f$customizer$2f$RTL$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/(DashboardLayout)/layout/shared/customizer/RTL.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$Theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/theme/Theme.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/react-redux/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$hooks$2f$useSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/es/hooks/useSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2d$nextjs$2f$v13$2d$appRouter$2f$appRouterV13$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppRouterCacheProvider$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material-nextjs/v13-appRouter/appRouterV13.js [app-client] (ecmascript) <export default as AppRouterCacheProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/i18n.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
const MyApp = ({ children, session })=>{
    _s();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$theme$2f$Theme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeSettings"])();
    const customizer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$hooks$2f$useSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.customizer);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionProvider"], {
            session: session,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2d$nextjs$2f$v13$2d$appRouter$2f$appRouterV13$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppRouterCacheProvider$3e$__["AppRouterCacheProvider"], {
                options: {
                    enableCssLayer: true
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__["ThemeProvider"], {
                    theme: theme,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$DashboardLayout$292f$layout$2f$shared$2f$customizer$2f$RTL$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        direction: customizer.activeDir,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/app/app.jsx",
                                lineNumber: 24,
                                columnNumber: 15
                            }, this),
                            children
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/app.jsx",
                        lineNumber: 23,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/app.jsx",
                    lineNumber: 22,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/app.jsx",
                lineNumber: 21,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/app.jsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false);
};
_s(MyApp, "7L49aKuvK8zXbyZ3EYb144xgEoE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$es$2f$hooks$2f$useSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = MyApp;
const __TURBOPACK__default__export__ = MyApp;
var _c;
__turbopack_refresh__.register(_c, "MyApp");

})()),
"[project]/src/app/layout.jsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__3728af._.js.map