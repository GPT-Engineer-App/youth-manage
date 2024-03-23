import React, { useState } from "react";

import { Box, Button, Flex, Heading, Image, Input, Link, Text, VStack } from "@chakra-ui/react";
import { FaCalendar, FaClock, FaComment, FaTasks, FaUser, FaVideo } from "react-icons/fa";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [timeLogs, setTimeLogs] = useState([]);

  const handleTimeCard = () => {
    const now = new Date();
    setTimeLogs([...timeLogs, now]);
  };

  const handleLogin = () => {
    // TODO: Implement login functionality
    setIsLoggedIn(true);
  };

  return (
    <Box bg="blue.50" minH="100vh" py={8}>
      <Flex direction="column" align="center">
        <Heading as="h1" size="2xl" mb={8} color="blue.600" fontWeight="bold">
          学生団体管理
        </Heading>
        {isLoggedIn ? (
          <Flex direction={["column", "row"]} justify="center" align="center" wrap="wrap">
            <Box m={4} p={6} bg="white" borderRadius="lg" boxShadow="md" textAlign="center">
              <FaUser size={48} color="blue.600" />
              <Heading as="h2" size="xl" mt={4} mb={2} color="blue.600">
                個人ページ
              </Heading>
              <Text>プロフィールの閲覧と更新</Text>
            </Box>
            <Box m={4} p={6} bg="white" borderRadius="lg" boxShadow="md" textAlign="center">
              <FaTasks size={48} color="blue.600" />
              <Heading as="h2" size="xl" mt={4} mb={2} color="blue.600">
                タスク管理
              </Heading>
              <Text>割り当てられたタスクの表示とリクエスト</Text>
            </Box>
            <Box m={4} p={6} bg="white" borderRadius="lg" boxShadow="md" textAlign="center" cursor="pointer" onClick={handleTimeCard}>
              <FaClock size={48} color="blue.600" />
              <Heading as="h2" size="xl" mt={4} mb={2} color="blue.600">
                タイムカード
              </Heading>
              <Text mb={4}>リモートワーク時間の記録</Text>
              {timeLogs.map((log, index) => (
                <Text key={index} fontSize="sm" color="gray.600">
                  {`${log.getFullYear()}/${(log.getMonth() + 1).toString().padStart(2, "0")}/${log.getDate().toString().padStart(2, "0")} ${log.getHours().toString().padStart(2, "0")}:${log.getMinutes().toString().padStart(2, "0")}:${log.getSeconds().toString().padStart(2, "0")}`}
                </Text>
              ))}
            </Box>
            <Box m={4} p={6} bg="white" borderRadius="lg" boxShadow="md" textAlign="center">
              <FaClock size={48} color="blue.600" />
              <Heading as="h2" size="xl" mt={4} mb={2} color="blue.600">
                活動記録
              </Heading>
              <Text>活動時間の記録とランキングの表示</Text>
            </Box>
            <Box m={4} p={6} bg="white" borderRadius="lg" boxShadow="md" textAlign="center">
              <FaVideo size={48} color="blue.600" />
              <Heading as="h2" size="xl" mt={4} mb={2} color="blue.600">
                会議録画
              </Heading>
              <Text>欠席した会議の録画の閲覧とアップロード</Text>
            </Box>
            <Box m={4} p={6} bg="white" borderRadius="lg" boxShadow="md" textAlign="center">
              <FaCalendar size={48} color="blue.600" />
              <Heading as="h2" size="xl" mt={4} mb={2} color="blue.600">
                スケジュールカレンダー
              </Heading>
              <Text>内部カレンダーのイベントの閲覧と追加</Text>
            </Box>
            <Box m={4} p={6} bg="white" borderRadius="lg" boxShadow="md" textAlign="center">
              <Link href="https://zoom.us" isExternal>
                <Image src="https://images.unsplash.com/photo-1632435499182-e436787ce107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx6b29tJTIwbG9nb3xlbnwwfHx8fDE3MTExNjYxNDN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Zoom" w={48} h={48} mx="auto" />
                <Heading as="h2" size="xl" mt={4} mb={2} color="blue.600">
                  Zoomミーティングに参加
                </Heading>
              </Link>
            </Box>
            <Box m={4} p={6} bg="white" borderRadius="lg" boxShadow="md" textAlign="center">
              <FaComment size={48} color="blue.600" />
              <Heading as="h2" size="xl" mt={4} mb={2} color="blue.600">
                チャットルーム
              </Heading>
              <Text>メンバー用カテゴリ別チャットルーム</Text>
            </Box>
            <Box m={4} p={6} bg="white" borderRadius="lg" boxShadow="md" textAlign="center">
              <Image src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZXxlbnwwfHx8fDE3MTExNjYxNDN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Certificate" w={48} h={48} mx="auto" />
              <Heading as="h2" size="xl" mt={4} mb={2} color="blue.600">
                活動証明書
              </Heading>
              <Text>活動に基づいて証明書を発行</Text>
            </Box>
            <Box m={4} p={6} bg="white" borderRadius="lg" boxShadow="md" textAlign="center">
              <FaVideo size={48} color="blue.600" />
              <Heading as="h2" size="xl" mt={4} mb={2} color="blue.600">
                カジュアルビデオ通話
              </Heading>
              <Text>メンバーとのカジュアルなビデオチャット</Text>
            </Box>
            <Box m={4} p={6} bg="white" borderRadius="lg" boxShadow="md" textAlign="center">
              <FaUser size={48} color="blue.600" />
              <Heading as="h2" size="xl" mt={4} mb={2} color="blue.600">
                メンバープロフィール
              </Heading>
              <Text>全団体メンバーのプロフィールを閲覧</Text>
            </Box>
          </Flex>
        ) : (
          <VStack spacing={4}>
            <Input placeholder="ユーザー名" />
            <Input placeholder="パスワード" type="password" />
            <Button colorScheme="blue" onClick={handleLogin}>
              ログイン
            </Button>
          </VStack>
        )}
      </Flex>
    </Box>
  );
};

export default Index;
