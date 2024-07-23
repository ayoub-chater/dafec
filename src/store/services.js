import { defineStore } from "pinia";

export const useServices = defineStore('services',{
    state: () => ({
        services: [
            { id: 1, name: "Expertise comptable", img: "https://d2ktnx5kgug713.cloudfront.net/wp-content/uploads/sites/20/2016/05/5-360x180.jpg?x12902", description: "Tenue et révision comptable, Catégorisation douanière et fiscale, Inventaire des immobilisations..." },
            { id: 2, name: "Commissariat aux compte", img: "https://d2ktnx5kgug713.cloudfront.net/wp-content/uploads/sites/20/2016/05/maxresdefault-360x180.jpg?x12902", description: "Audit légal, Audit contractuel, Commissariat aux apport, Audit d'acquisition..." },
            { id: 3, name: "Conseil", img: "https://d2ktnx5kgug713.cloudfront.net/wp-content/uploads/sites/20/2016/05/blog2-360x180.jpg?x12902", description: "Cartographie des risques, Evaluation d'entreprise of denouncing pleasure and praising pain was born..." },
            { id: 4, name: "Fiscalité", img: "https://d2ktnx5kgug713.cloudfront.net/wp-content/uploads/sites/20/2016/06/slide2-360x180.jpg?x12902", description: "Déclarations fiscales, Contrôle fiscal, conseil fiscalAssistance en formalités juridiques..." },
            { id: 5, name: "Services juridiques", img: "https://d2ktnx5kgug713.cloudfront.net/wp-content/uploads/sites/20/2016/05/property-law-360x180.jpg?x12902", description: "Création, développement, Transmission, cession, Assistance en formalités juridiques..." },
            { id: 6, name: "Formation", img: "https://d2ktnx5kgug713.cloudfront.net/wp-content/uploads/sites/20/2016/05/service_image-1110x550-360x180.jpg?x12902", description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born..." }
        ],
        selectedService: {},
    }),
    actions: {
        selectService(serviceId) {
            const selectedService = this.services.find(service => service.id === serviceId);
            if (selectedService) {
                this.selectedService = selectedService;
            }
        }
    }
});