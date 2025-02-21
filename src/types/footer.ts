type TFooterLink = {
	title: string;
	href: string;
};

export interface IFooterSection {
	title: string;
	links: TFooterLink[];
}

export interface IFooterList {
	project: IFooterSection;
	resort: IFooterSection;
	company: IFooterSection;
}
