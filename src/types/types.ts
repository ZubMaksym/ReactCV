import { type ReactNode } from "react";

export interface DescriptionTitleProps {
    title: string;
    children?: ReactNode;
}

export interface DetailsSectionProps {
    section: string;
    children?: ReactNode;
}

export interface DescriptionContentProps {
    value: string;
}

export interface DescriptionSkillsProps {
    skills: Array<string>;
}

export interface DescriptionLanguagesProps {
    languages: Array<string>;
}

export interface DetailsProjectsHeadingProps {
    heading: string;
    years: string;
}

export interface DetailsProjectsContentProps {
    description: string;
}

export interface DetailsReferencesProps {
    references: string;
}

export interface DetailsEducationProps {
    details: [{
        educationalInstitution: string;
        years: string;
    }]
}

