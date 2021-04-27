import { App } from 'vue'
import { ElIcon, ElLoading, ElCard, ElButton } from 'element-plus'

export default function importUiFramework(app: App) {
  // load Element Plus as need
  app.use(ElButton).use(ElCard).use(ElLoading).use(ElIcon)
  return app
}
