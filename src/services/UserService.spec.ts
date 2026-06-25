import { User, UserService } from "./UserService";

describe('UserService', () => {
    const mockDb: User[] = []
    const userService = new UserService(mockDb);

    it('Deve adicionar um novo usuário', () => {
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.createUser('nath', 'nath@test.com');
        expect(mockConsole).toHaveBeenCalledWith('DB atualizado', mockDb)
    })

    it('Deve deletar um usuário existente', () => {
        userService.createUser('joana', 'joana@test.com')
        const result = userService.deleteUser('joana')
        expect(result).toBe(true)
        expect(mockDb.find(u => u.name === 'joana')).toBeUndefined()
    })

    it('Deve retornar false ao tentar deletar usuário inexistente', () => {
        const result = userService.deleteUser('inexistente')
        expect(result).toBe(false)
    })
})
