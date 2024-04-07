export const users = [
    {
        id: "gtr3243843",
        accessToken: "atiemrjkmmtjscs",
        username: "Tim Cook",
        email: "tim@mail.com",
        tokens: null,
        role: "admin",
        profilePicture: "https://i.ibb.co/VgMsMBK/spencer-davis-r-LPF7o-Zfik-unsplash.jpg",
        message: "good morning",
        enabled: true,
        deleted: false,
    },
    {
        id: "gtr3243844",
        accessToken: "atiemrjkmmtjscs",
        username: "Charles Dickens",
        email: "charles@mail.com",
        tokens: null,
        role: "admin",
        message: "good morning",
        enabled: false,
        deleted: false,
    },
    {
        id: "gtr3243845",
        accessToken: "atiemrjkmmtjscs",
        username: "Linus Torvalds",
        email: "linus@mail.com",
        tokens: null,
        role: "admin",
        profilePicture: "https://i.ibb.co/VgMsMBK/spencer-davis-r-LPF7o-Zfik-unsplash.jpg",
        message: "good morning",
        enabled: true,
        deleted: false,
    },
    {
        id: "gtr3243846",
        accessToken: "atiemrjkmmtjscs",
        username: "Paul Walker",
        email: "paul@mail.com",
        tokens: null,
        role: "admin",
        profilePicture: "https://i.ibb.co/VgMsMBK/spencer-davis-r-LPF7o-Zfik-unsplash.jpg",
        message: "good morning",
        enabled: true,
        deleted: false,
    },
    {
        id: "gtr3243847",
        accessToken: "atiemrjkmmtjscs",
        username: "Spencer Davies",
        email: "spencer@mail.com",
        tokens: null,
        role: "admin",
        profilePicture: "https://i.ibb.co/VgMsMBK/spencer-davis-r-LPF7o-Zfik-unsplash.jpg",
        message: "good morning",
        enabled: true,
        deleted: false,
    },
    {
        id: "gtr3243848",
        accessToken: "atiemrjkmmtjscs",
        username: "Big Show",
        email: "big@mail.com",
        tokens: null,
        role: "admin",
        profilePicture: "https://i.ibb.co/VgMsMBK/spencer-davis-r-LPF7o-Zfik-unsplash.jpg",
        message: "good morning",
        enabled: true,
        deleted: false,
    },
    {
        id: "gtr3243849",
        accessToken: "atiemrjkmmtjscs",
        username: "Marry Poppins",
        email: "mary@mail.com",
        tokens: null,
        role: "admin",
        profilePicture: "https://i.ibb.co/VgMsMBK/spencer-davis-r-LPF7o-Zfik-unsplash.jpg",
        message: "good morning",
        enabled: true,
        deleted: false,
    },
    {
        id: "gtr32438410",
        accessToken: "atiemrjkmmtjscs",
        username: "Freddie Mecury",
        email: "freddie@mail.com",
        tokens: null,
        role: "admin",
        profilePicture: "https://i.ibb.co/VgMsMBK/spencer-davis-r-LPF7o-Zfik-unsplash.jpg",
        message: "good morning",
        enabled: true,
        deleted: false,
    },
    {
        id: "gtr32438411",
        accessToken: "atiemrjkmmtjscs",
        username: "Imagine Dragons",
        email: "imagine@mail.com",
        tokens: null,
        role: "admin",
        profilePicture: "https://i.ibb.co/VgMsMBK/spencer-davis-r-LPF7o-Zfik-unsplash.jpg",
        message: "good morning",
        enabled: true,
        deleted: false,
    },
    {
        id: "gtr32438412",
        accessToken: "atiemrjkmmtjscs",
        username: "Tanjiro Kamado",
        email: "monturo@mail.com",
        tokens: null,
        role: "admin",
        profilePicture: "https://i.ibb.co/VgMsMBK/spencer-davis-r-LPF7o-Zfik-unsplash.jpg",
        message: "good morning",
        enabled: true,
        deleted: false,
    },
    {
        id: "gtr32438413",
        accessToken: "atiemrjkmmtjscs",
        username: "Big Show",
        email: "big@mail.com",
        tokens: null,
        role: "admin",
        profilePicture: "https://i.ibb.co/VgMsMBK/spencer-davis-r-LPF7o-Zfik-unsplash.jpg",
        message: "good morning",
        enabled: true,
        deleted: false,
    },
    {
        id: "gtr32438414",
        accessToken: "atiemrjkmmtjscs",
        username: "Dj Akademiks",
        email: "dj@mail.com",
        tokens: null,
        role: "admin",
        profilePicture: "https://i.ibb.co/VgMsMBK/spencer-davis-r-LPF7o-Zfik-unsplash.jpg",
        message: "good morning",
        enabled: true,
        deleted: false,
    },
] satisfies User[];

export interface User {
    message: string;
    id: string;
    name?: string;
    accessToken: string;
    username: string;
    email: string;
    role: string;
    profilePicture?: string;
    tokens: string | null;
    enabled: boolean;
    deleted: boolean;
}

export function getUsers(page: number, limit: number) {
    const temp = [];
    for (let i = (page - 1) * limit; i < page * limit; i++) {
        temp.push(users[i]);
    }
    return temp;
}

export const totalUsers = () => users.length;
