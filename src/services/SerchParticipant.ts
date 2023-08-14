import { Api } from "../providers/Api";

const searchPaticipant = (data: any) => Api.get('http://localhost:8084/atlprevcomp/v1/tl1/pesquisa-participantes', data)

export const SearchParticipantServices = {
    searchPaticipant
};