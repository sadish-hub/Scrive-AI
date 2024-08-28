'use client';
import Grid from '@mui/material/Grid'

import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/components/container/PageContainer';

// import ProductCarousel from '@/app/components/apps/ecommerce/productDetail/ProductCarousel';
// import ProductDetail from '@/app/components/apps/ecommerce/productDetail/ProductDetail';
// import ProductDesc from '@/app/components/apps/ecommerce/productDetail/ProductDesc';
// import ProductRelated from '@/app/components/apps/ecommerce/productDetail/ProductRelated';

import ProductDesc from '@/app/components/documents/productDetail/ProductDesc';
import ProductRelated from '@/app/components/documents/productDetail/ProductRelated';
import ChildCard from '@/app/components/shared/ChildCard';
import ProductDetail from '@/app/components/documents/productDetail/ProductDetail';


const BCrumb = [
  {
    to: '/', 
    title: 'Home',
  },
  {
    title: 'Shop',
    to: '/apps/ecommerce/shop',
  },
  {
    title: 'detail',
  },
];

const EcommerceDetail = () => {
  console.log("Adhoc");
  return (
    <PageContainer title="Documents Detail" description="this is eCommerce Detail">
      {/* breadcrumb */}
      <Breadcrumb title="Product Detail" items={BCrumb} />
      <Grid container spacing={3} sx={{ maxWidth: { lg: '1055px', xl: '1200px' } }}>
        <Grid item xs={12} sm={12} lg={12}>
          <ChildCard>
            {/* ------------------------------------------- */}
            {/* Carousel */}
            {/* ------------------------------------------- */}
            <Grid container spacing={3}>
             
              <Grid item xs={12} sm={12} lg={6}>
                <ProductDetail />
              </Grid>
            </Grid>
          </ChildCard>
        </Grid> 
        <Grid item xs={12} sm={12} lg={12}>
          <ProductDesc />
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <ProductRelated />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default EcommerceDetail
