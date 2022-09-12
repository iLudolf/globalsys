import { IKaizenRepository, IKaizensInfoDTO } from "../../repositories/IKaizensRepository";

interface IDashboard {
    id: string;
    label: string,
    value: number;
    color: string;
}

class ListKaizensInfoUseCases {
    constructor(private kaizenRepository: IKaizenRepository) { }

    async execute(): Promise<IKaizensInfoDTO[]> {
        let arryAux: any = [];
        let arr = await this.kaizenRepository.listInfo();

        arr.map((element, index) => {

            let id: string = '';
            let label: string = '';
            let value: number = 0;
            let color: string = 'hsl(43, 74%, 49%)';

            switch (String(element.category)) {
                case 'm':
                    id = "Mensal";
                    label = "Mensal";
                    value = Number(element.count);
                    color = 'hsl(30, 61%, 50%)';

                    break;

                case 'q':
                    id = "Trimestral";
                    label = "Trimestral";
                    value = Number(element.count);
                    color = 'hsl(255, 2%, 67%)';

                    break;

                case 'y':
                    id = "Anual";
                    label = "Anual";
                    value = Number(element.count);
                    color = 'hsl(43, 74%, 49%)';

                    break;
                default:
                    break;
            }

            arryAux.push(
                {
                    id,
                    label,
                    value,
                    color,
                }
            )

        })

        return await arryAux;
    }
}

export { ListKaizensInfoUseCases }