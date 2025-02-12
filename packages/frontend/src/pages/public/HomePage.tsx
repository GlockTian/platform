import { LinkIcon } from '@heroicons/react/outline';
import { Button, Spacer, Text } from '@nextui-org/react';
import React, { useState } from 'react';
import ShareLinkModal from '../../components/ShareLinkModal';
import { useAuth } from '../../hooks/useAuth';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const { user } = useAuth();
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };

  return (
    <div>
      <Text h1> Hello </Text>
      <p>{user?.displayName}</p>
      <Button size="sm">Small</Button>
      <Spacer y={1} />
      <Button
        auto
        rounded
        onClick={onClick}
        icon={<LinkIcon className="h-5 w-5" />}
      >
        Get Link
      </Button>
      <ShareLinkModal visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default HomePage;
