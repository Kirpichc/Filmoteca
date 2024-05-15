import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

export const confirmInGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return confirm('На следующей странице может быть материал с пометкой 18+. Переходя вы подтверждаете что вам 18 лет');
}