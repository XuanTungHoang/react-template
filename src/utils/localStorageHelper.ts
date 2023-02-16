export type LocalStorageKey = 'user' | 'token'

export const localStorageHelper = (() => {
  const getItem = (key: LocalStorageKey) => {
    const value = window.localStorage.getItem(key)
    try {
      if (!value) return null;
      return JSON.parse(value)
    } catch (error) {
      console.error(error);
      return value
    }
  }
  const setItem = (key: LocalStorageKey, value: any) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      window.localStorage.setItem(key, value)
      console.error(error);
    }
  }
  const removeItem = (key: LocalStorageKey) => {
    window.localStorage.removeItem(key)
  }

  return {
    getItem,
    setItem,
    removeItem
  }
})()