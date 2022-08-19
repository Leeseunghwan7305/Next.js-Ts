import path from "path";
import fs from "fs/promises"; // 브라우저 측 자바스크립트가 파일 시스템에 접근할 수 없기 때문에 클라이언트 사이드에서는 fs 모듈 작업이 안됨

export const getProducts = async () => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData as unknown as string);

  return data;
};
