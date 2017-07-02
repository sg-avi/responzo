import * as mdl from "./angularModule";

let isMobile: (() => boolean) | null = null;

mdl.default.run(['$mdMedia', (mdMedia: ng.material.IMedia) => {
    isMobile = () => !mdMedia('gt-md');
}]);

export default () => {
    if (isMobile === null) {
        throw 'isMobile can\'t be used before module initialization';
    }

    return isMobile();
};