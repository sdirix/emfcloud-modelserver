import { injectable, inject } from '@theia/core/shared/inversify';
import { Command, CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from '@theia/core/lib/common';
import { CommonMenus } from '@theia/core/lib/browser';

export const EmfcloudModelserverCommand: Command = {
    id: 'EmfcloudModelserver.command',
    label: 'Say Hello'
};

@injectable()
export class EmfcloudModelserverCommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(EmfcloudModelserverCommand, {
            execute: () => this.messageService.info('Hello World!')
        });
    }
}

@injectable()
export class EmfcloudModelserverMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: EmfcloudModelserverCommand.id,
            label: EmfcloudModelserverCommand.label
        });
    }
}
