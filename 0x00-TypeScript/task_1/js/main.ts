interface Teacher = {
    readonly fristName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [attrName: string]: any;
};
