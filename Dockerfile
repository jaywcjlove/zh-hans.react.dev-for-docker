FROM node:16

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 文件到工作目录
COPY package*.json ./

# 安装项目依赖
RUN yarn install

# 复制项目文件到工作目录
COPY . .

# 构建 Next.js 应用
# RUN npm run build

# 设置环境变量
ENV NODE_ENV production

# 暴露容器的 3000 端口
EXPOSE 3000

# 运行 Next.js 应用
CMD ["npm", "start"]