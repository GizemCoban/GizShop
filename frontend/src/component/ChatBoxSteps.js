function ChatSteps(kadin,erkek,cocuk){
    console.log(kadin)
    const steps = [
        {
            id: '1',
            message: 'Merhaba, GizShop a hoşgeldiniz isminiz nedir?',
            trigger: 2
        },
        {
            id: '2',
            user: true,
            trigger: '3',
        },
        {
            id: '3',
            message: 'Merhaba, {previousValue}, hangi ürün tipleri ile ilgileniyorsunuz? ',
            trigger: '4'
        },
        {
            id: '4',
            options: [
                { value: 1, label: 'Kadın', trigger: '5' },
                { value: 2, label: 'Erkek', trigger: '8' },
                { value: 3, label: 'Çocuk', trigger: '10' },
                { value: 'iletisim', label: 'Yardım', trigger: '12' },
            ]
        },
        {
            id:'5',
            message: 'Lütfen Kadin tipine ait bir kategori seçiniz',
            trigger: "6"
        },
        {
            id: "6",
            options: kadin
        },
        {
            id: '7',
            message: 'Seçtiğiniz sayfaya yönlendiriliyorsunuz ... ',
            end: true
        },
        {
            id:'8',
            message: 'Lütfen Erkek tipine ait bir kategori seçiniz',
            trigger: "9"
        },
        {
            id: "9",
            options: erkek
        },
        {
            id:'10',
            message: 'Lütfen Çocuk tipine ait bir kategori seçiniz',
            trigger: "11"
        },
        {
            id: "11",
            options: cocuk
        },
        {
            id:'12',
            message: 'Yardım sayfasına yönlendiriliyorsunuz ... ',
            end: true
        }
    ];

    return steps
}


export default ChatSteps