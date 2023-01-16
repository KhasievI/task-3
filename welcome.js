import os from "os"

export function ostype() {
    return `Привет, юзер. Вижу ты зашел с ${os.type()}`
}