/**
 * Generated using theia-extension-generator
 */
import { EmfcloudModelserverCommandContribution, EmfcloudModelserverMenuContribution } from './emfcloud-modelserver-contribution';
import { CommandContribution, MenuContribution } from '@theia/core/lib/common';
import { ContainerModule } from '@theia/core/shared/inversify';

export default new ContainerModule(bind => {
    // add your contribution bindings here
    bind(CommandContribution).to(EmfcloudModelserverCommandContribution);
    bind(MenuContribution).to(EmfcloudModelserverMenuContribution);
});
